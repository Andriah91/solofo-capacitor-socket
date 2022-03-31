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
    String host;
    Integer port;
    BufferedReader reader;

    @PluginMethod
    public void open(PluginCall call) {
        host = call.getString("host");
        port = call.getInt("port");
        try {
            socketClient = new Socket(host, port);
            System.out.println("Client: " + "Connection Established");
            reader = new BufferedReader(new InputStreamReader(socketClient.getInputStream()));
            String serverMsg;
            while ((serverMsg = reader.readLine()) != null) {
                if(serverMsg.indexOf("GGA") >= 0 ) {
                String[] result = serverMsg.split(",");
                JSObject response = new JSObject();
                response.put("Z_EGM_GGA", result[9]);
                response.put("N_EGM_GGA", result[11]);
                response.put("POS", result[6]);
                notifyListeners("SocketSuccessListner", response, false);
                }
            }

        } catch (Exception e) {
            notifyListeners("SocketErrorListner", new JSObject().put("error", e.getMessage()), true);
        }
    }

    @PluginMethod
    public void close(){
        try {
            reader.close();
            socketClient.close();
            notifyListeners("SocketClosedListner", response, false);
        }catch (Exception e){

        }
    }

}