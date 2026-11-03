import SingInPageComment from "@/components/auth/sign-in"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { RedirectIfAuthenticated } from "@/components/auth/RedirectIfAuthenticated"

function SingInPage(){
    return <main className="app-shell-bg flex min-h-svh items-center justify-center px-6 py-10">
        <Card className="w-full max-w-md border-border/70 bg-card/90 shadow-none ring-border">
            <CardHeader className="items-center text-center ">
                <div className="mb-2 flex size12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Sparkles className="size-5">

                    </Sparkles>
                </div>
                <CardTitle className="font-heading text-3xl font-semibold tracking-tight">
                    Meeting Assintant 
                </CardTitle>
                <CardDescription>
                    Sign in to connect calendar and start schdule with yout agent  
                </CardDescription>
            </CardHeader>
            <RedirectIfAuthenticated>

           <SingInPageComment/>
            </RedirectIfAuthenticated>
        </Card>

    </main>
}

export default SingInPage