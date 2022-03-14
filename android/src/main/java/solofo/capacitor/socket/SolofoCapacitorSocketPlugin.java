package solofo.capacitor.socket;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.Socket;

@CapacitorPlugin(name = "SolofoCapacitorSocket")
public class SolofoCapacitorSocketPlugin extends Plugin {

    Socket socketClient;

    @PluginMethod
    public void Open(PluginCall call) {
        String host = call.getString("host");
        Integer port = call.getInt("port");

        try {
            socketClient = new Socket(host, port);
            System.out.println("Client: " + "Connection Established");
            notifyListeners("SocketOpnedListner", new JSObject().put("result", true), true);

            BufferedReader reader = new BufferedReader(new InputStreamReader(socketClient.getInputStream()));
            String serverMsg;
            while ((serverMsg = reader.readLine()) != null) {
                notifyListeners("SocketSuccessListner", new JSObject().put("result", serverMsg), true);
            }

        } catch (Exception e) {
            e.printStackTrace();
            notifyListeners("SocketErrorListner", new JSObject().put("error", e.getMessage()), true);
        }

    }
}
