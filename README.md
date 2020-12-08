# onesignal-push-action

A basic GitHub action to send a push notification using [OneSignal](https://onesignal.com/).

**Like this project? Help support my projects and buy me a coffee via [ko-fi](https://ko-fi.com/defaced)**.

## Inputs

### `title`

**Required** The push notification title.

### `message`

**Required** The push notification message.

### `rest-api-key`

**Required** Your OneSignal app's REST API key.

### `app-id`

**Required** Your OneSignal app's ID.

## Example usage

```
uses: workeffortwaste/onesignal-push-action@v1.1
  with:
   title: 'your title'
   message: 'your message'
   rest-api-key: ${{ secrets.ONESIGNAL_API }}
   app-id: ${{ secrets.ONESIGNAL_ID }}
```
