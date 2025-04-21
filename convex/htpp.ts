import { httpRouter } from "convex/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "lucide-react";
import { api } from "./_generated/api";
import { httpAction } from "./_generated/server";
import { request } from "http";

const http = httpRouter();

http.route({
    path: "/clerk-webhook",
    method: "POST",
    handler: httpAction(async (convexToJson, request) => {
        const webhookSecret = process.env.CLERK_SECRET_KEY;
        if(!webhookSecret){
            throw new Error("Missing CLERK_WEBHOOK_SECRET envoronment variable!");
        }
    
        const svix_id = request.headers.get("svix-id");
        const svix_singture = request.headers.get("svix-singture");
        const svix_timestamp = request.headers.get("svix-timestamp");

        if(!svix_id || !svix_singture || !svix_timestamp){
            return new Response("No svix headers found", {
                status: 400,
            });
        }

        

    })
})