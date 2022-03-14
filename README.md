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
* [`addListener('SocketSuccessListner', ...)`](#addlistenersocketsuccesslistner)
* [`addListener('SocketErrorListner', ...)`](#addlistenersocketerrorlistner)
* [`addListener('SocketOpnedListner', ...)`](#addlistenersocketopnedlistner)
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


### addListener('SocketSuccessListner', ...)

```typescript
addListener(eventName: 'SocketSuccessListner', listenerFunc: SocketSuccessListner) => Promise<PluginListenerHandle>
```

| Param              | Type                                                                    |
| ------------------ | ----------------------------------------------------------------------- |
| **`eventName`**    | <code>'<a href="#socketsuccesslistner">SocketSuccessListner</a>'</code> |
| **`listenerFunc`** | <code><a href="#socketsuccesslistner">SocketSuccessListner</a></code>   |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### addListener('SocketErrorListner', ...)

```typescript
addListener(eventName: 'SocketErrorListner', listenerFunc: SocketErrorListner) => Promise<PluginListenerHandle>
```

| Param              | Type                                                                |
| ------------------ | ------------------------------------------------------------------- |
| **`eventName`**    | <code>'<a href="#socketerrorlistner">SocketErrorListner</a>'</code> |
| **`listenerFunc`** | <code><a href="#socketerrorlistner">SocketErrorListner</a></code>   |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### addListener('SocketOpnedListner', ...)

```typescript
addListener(eventName: 'SocketOpnedListner', listenerFunc: SocketErrorListner) => Promise<PluginListenerHandle>
```

| Param              | Type                                                              |
| ------------------ | ----------------------------------------------------------------- |
| **`eventName`**    | <code>'SocketOpnedListner'</code>                                 |
| **`listenerFunc`** | <code><a href="#socketerrorlistner">SocketErrorListner</a></code> |

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


#### SocketSuccessListner

<code>(resultScan: any): void</code>


#### SocketErrorListner

<code>(resultScan: any): void</code>

</docgen-api>
