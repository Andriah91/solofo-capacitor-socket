# solofo-capacitor-socket

"Capacitor socket plugin"

## Install

```bash
npm install solofo-capacitor-socket
npx cap sync
```

## API

<docgen-index>

* [`open(...)`](#open)
* [`close()`](#close)
* [`addListener('SocketSuccessListner', ...)`](#addlistenersocketsuccesslistner)
* [`addListener('SocketErrorListner', ...)`](#addlistenersocketerrorlistner)
* [`addListener('SocketClosedListner', ...)`](#addlistenersocketclosedlistner)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open(...)

```typescript
open(option: SocketOption) => void
```

| Param        | Type                                                  |
| ------------ | ----------------------------------------------------- |
| **`option`** | <code><a href="#socketoption">SocketOption</a></code> |

--------------------


### close()

```typescript
close() => void
```

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


### addListener('SocketClosedListner', ...)

```typescript
addListener(eventName: 'SocketClosedListner', listenerFunc: SocketErrorListner) => Promise<PluginListenerHandle>
```

| Param              | Type                                                              |
| ------------------ | ----------------------------------------------------------------- |
| **`eventName`**    | <code>'SocketClosedListner'</code>                                |
| **`listenerFunc`** | <code><a href="#socketerrorlistner">SocketErrorListner</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### Interfaces


#### SocketOption

| Prop       | Type                |
| ---------- | ------------------- |
| **`host`** | <code>string</code> |
| **`port`** | <code>number</code> |
| **`stop`** | <code>number</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### NMEA_GGA

| Prop            | Type                |
| --------------- | ------------------- |
| **`Z_EGM_GGA`** | <code>number</code> |
| **`N_EGM_GGA`** | <code>number</code> |
| **`POS`**       | <code>number</code> |


### Type Aliases


#### SocketSuccessListner

<code>(<a href="#nmea_gga">NMEA_GGA</a>: <a href="#nmea_gga">NMEA_GGA</a>): void</code>


#### SocketErrorListner

<code>(error: any): void</code>

</docgen-api>
