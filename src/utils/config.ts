interface Config {
    clientId: string
    clientSecret: string
}

export const config: Config = {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
    clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET || ''
}