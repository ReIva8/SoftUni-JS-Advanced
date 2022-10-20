function createComputerHierarchy() {
    class Device {
        constructor(manufacturer) {
            if (new.target == Device) {
                throw new Error('Cannot make an instance of abstract class Device')
            }
            this.manufacturer = manufacturer;
        }
    }
 
    class Keyboard extends Device{
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }
 
    class Monitor extends Device{
        constructor(manufacturer, width, height) {
            super(manufacturer)
            this.width = width;
            this.height = height;
        }
    }
 
    class Battery extends Device{
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }
    
    class Computer extends Device{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target == Computer) {
                throw new Error('Cannot make instance of abstract class Computer');
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
 
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
 
        get battery() {
            return this._battery;
        }
 
        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError('Passed value is not an instance of Battery class')
            }
            this._battery = value;
 
        }
    }
 
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
 
        get keyboard() {
            return this._keyboard;
        }
 
        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError('Passed value is not an instance of Keyboard class')
            }
            this._keyboard = value;
        }
 
        get monitor() {
            return this._monitor;
        }
 
        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError('Passed value is not an instance of Monitor class')
            }
            this._monitor = value;
        }
    }
 
 
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}