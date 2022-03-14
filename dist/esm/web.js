import { WebPlugin } from '@capacitor/core';
export class SolofoCapacitorSocketWeb extends WebPlugin {
    open(option) {
        console.log(option);
        throw new Error('Method not implemented.');
    }
    close() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=web.js.map