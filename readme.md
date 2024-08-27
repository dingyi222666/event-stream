# event-stream

Make Server-Sent Events support for [@cordisjs/plugin-http](https://github.com/cordiverse/http).

## Install

```bash
npm install @dingyi222666/event-stream
```

## Usage

### Cordis

```ts

import { apply as applyEventStream } from '@dingyi222666/event-stream'

async function apply(ctx: Context) {
    applyEventStream(ctx)

    const resp = await ctx.http.get('/event-stream', {
        responseType: 'event-stream',
    })

    for await (const message of resp) {
        console.log(message)
    }
}
```

### Fetch

See [Fetch Event Stream](https://github.com/lukeed/fetch-event-stream) for more details.
