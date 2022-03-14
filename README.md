# solofo-capacitor-socket

"Capacitor socket plugin"

## Install

```bash
npm install solofo-capacitor-socket
npx cap sync
```

## API

<docgen-index>

* [`Open(...)`](#open)
* [`addListener('socketListner', ...)`](#addlistenersocketlistner)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### Open(...)

```typescript
Open(option: SocketOption) => void
```

| Param        | Type                                                  |
| ------------ | ----------------------------------------------------- |
| **`option`** | <code><a href="#socketoption">SocketOption</a></code> |

--------------------


### addListener('socketListner', ...)

```typescript
addListener(eventName: 'socketListner', listenerFunc: socketOpenedListener) => PluginListenerHandle
```

| Param              | Type                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| **`eventName`**    | <code>'socketListner'</code>                                          |
| **`listenerFunc`** | <code><a href="#socketopenedlistener">socketOpenedListener</a></code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### SocketOption

| Prop       | Type                |
| ---------- | ------------------- |
| **`host`** | <code>string</code> |
| **`port`** | <code>number</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### socketOpenedListener

<code>(resultScan: any): void</code>

</docgen-api>
