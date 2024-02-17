import NextAuth, { DefaultSession } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module 'next-auth' {
    interface Session extends DefaultSession {
        token?: Partial<{
            "accessToken": string,
            "tokenType": string,
            "profile": Partial<{
                "id": string,
                "username": string,
                "avatar": string,
                "discriminator": string,
                "public_flags": number,
                "premium_type": number,
                "flags": number,
                "banner": string,
                "accent_color": number,
                "global_name": string,
                "avatar_decoration_data": unknown,
                "banner_color": string,
                "mfa_enabled": boolean,
                "locale": string,
                "image_url": string
            }>,
            "iat": number,
            "exp": number,
            "jti": string
        }> & JWT
    }
}