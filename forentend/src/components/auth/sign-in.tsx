"use client"
import { Descope } from "@descope/nextjs-sdk";
import { useRouter } from "next/navigation";


function SingInPageComment(){
    const router = useRouter()
    return (
        <div className="descope-wrap">
            <Descope
            flowId="sign-up-or-in"
            autoFocus="skipFirstScreen"
            redirectAfterSuccess="/dsahboard"  
            onSuccess={()=>router.replace("/dsahboard")}
            onError={(event)=>console.error("singin falind",event.detail)} >

            </Descope>
        </div>
    )
}

export default SingInPageComment