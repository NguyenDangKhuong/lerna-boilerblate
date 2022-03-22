import { credentials } from 'grpc'
import { UsersClient } from '../../../../protos/gen/user_grpc_pb'

const port = 3000

export const client = new UsersClient(
  `localhost:${port}`,
  credentials.createInsecure()
)