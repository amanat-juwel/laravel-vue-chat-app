# Laravel Vue Chat Application

- Laravel 
- Vue
- Events
- Broadcast
- Pusher

## Configuration

uncomment these two lines in 'config/app.php'

Illuminate\Broadcasting\BroadcastServiceProvider::class,
App\Providers\BroadcastServiceProvider::class,

BROADCAST_DRIVER=pusher

PUSHER_APP_ID=xxxxxxxxxx
PUSHER_APP_KEY=xxxxxxxxxxx
PUSHER_APP_SECRET=xxxxxxxxxxxx
PUSHER_APP_CLUSTER=eu

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"