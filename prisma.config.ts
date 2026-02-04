import { defineConfig, env } from 'prisma/config'
import 'dotenv/config'
import { MyLocationSharp } from '@mui/icons-material'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env("mysql://root@localhost:3306/sim"),
  },
})