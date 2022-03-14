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

    @PluginMethod
    public void Open(PluginCall call) {
        String host = call.getString("host");
        Integer port = call.getInt("port");

        try {
            Socket socketClient = new Socket("51.75.128.130", 10101);
            System.out.println("Client: " + "Connection Established");
            BufferedReader reader =
                    new BufferedReader(new InputStreamReader(socketClient.getInputStream()));
            String serverMsg;
            while ((serverMsg = reader.readLine()) != null) {
                System.out.println("Client: " + serverMsg);
                notifyListeners("socketListner", new JSObject().put("result", serverMsg), true);
            }

        } catch (Exception e) {
            e.printStackTrace();
            notifyListeners("socketListner", new JSObject().put("error", e.getMessage()), true);
        }

    }
}
