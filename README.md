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
* [`addListener('socketListnerSuccess', ...)`](#addlistenersocketlistnersuccess)
* [`addListener('socketListnerError', ...)`](#addlistenersocketlistnererror)
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


### addListener('socketListnerSuccess', ...)

```typescript
addListener(eventName: 'socketListnerSuccess', listenerFunc: socketListnerSuccess) => Promise<PluginListenerHandle>
```

| Param              | Type                                                                    |
| ------------------ | ----------------------------------------------------------------------- |
| **`eventName`**    | <code>'<a href="#socketlistnersuccess">socketListnerSuccess</a>'</code> |
| **`listenerFunc`** | <code><a href="#socketlistnersuccess">socketListnerSuccess</a></code>   |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### addListener('socketListnerError', ...)

```typescript
addListener(eventName: 'socketListnerError', listenerFunc: socketListnerError) => Promise<PluginListenerHandle>
```

| Param              | Type                                                                |
| ------------------ | ------------------------------------------------------------------- |
| **`eventName`**    | <code>'<a href="#socketlistnererror">socketListnerError</a>'</code> |
| **`listenerFunc`** | <code><a href="#socketlistnererror">socketListnerError</a></code>   |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

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


#### socketListnerSuccess

<code>(resultScan: any): void</code>


#### socketListnerError

<code>(resultScan: any): void</code>

</docgen-api>
