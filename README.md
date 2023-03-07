# middle.messenger.praktikum.yandex

A special application for instantaneous text messages, photos, pictures, videos, documents with friends, relatives, acquaintances, work colleagues or study.

## Links

-   [Design template (Figma)](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1&t=GHg4NnDYrD2FE8Uv-0)
-   [Deployed example (Netlify)](https://lucky-kangaroo-41628e.netlify.app)

### Running via docker (localhost:3000)

| Command                           |
| :------------                     |
| docker build -t app .             |
| docker run -p 3000:3000 -d app    |

#### Running development (localhost:8080)

| Command        |
| :------------  |
| npm install    |
| npm run dev    |

#### Running production (localhost:3000)

| Command        |
| :------------  |
| npm install    |
| npm run start  |

### Structure project
```
├──src
│   ├── components      - responsible for page rendering
│   ├── interfaces      - interfaces and types for TS
|   ├── pages           - page information
|   ├── Store           - Application store
│   ├── core            - the logic of the framework
│   │   ├── Forms       - form state initialization and management service
        ├── Validator   - validation of forms
        ├── Router      - service for moving between pages
        ├── Render      - service for announcing a new component
        ├── Component   - a service that implements a component approach
        ├── States      - Application states
        ├── API         - XMLHttpRequest, WebSocket and controller
        ...
```
