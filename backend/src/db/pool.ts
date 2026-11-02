import { promises } from 'node:dns'
import { Pool } from 'pg'

let pool: Pool | null = null

export function getPool(): Pool {
    if (!pool) {
        const connectionString = process.env.DATABASE_URL
        
        if (!connectionString) {
            throw new Error('DATABASE_URL is not set here')
        }
        
        // সঠিক বানান 'connectionString' ব্যবহার করা হয়েছে
        pool = new Pool({ connectionString })
    }
    return pool
}

export async function closePoll(): Promise<void> {
    if (pool){
        await pool.end()
        pool = null 
    }
}