import {} from '@cordisjs/plugin-http'
import { Context, z } from 'cordis'
import { events, ServerSentEventMessage } from 'fetch-event-stream'
export * from 'fetch-event-stream'

declare module '@cordisjs/plugin-http' {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    export namespace HTTP {
        export interface ResponseTypes {
            'event-stream': AsyncGenerator<
                ServerSentEventMessage,
                void,
                unknown
            >
        }
    }
}

export const name = 'event-stream'
export const inject = ['http']

export interface Config {}

export const Config: z<Config> = z.object({})

export function apply(ctx: Context) {
    ctx.http.decoder('event-stream', (raw) => {
        return events(raw)
    })
}
