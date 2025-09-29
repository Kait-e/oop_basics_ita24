class BulkTank {
    constructor(capacity = 2000) {
        this.capacity = capacity;
        this.currentVolume = 0;
    }
    getCapacity() {
        return this.capacity;
    }

    getVolume() {
        return this.currentVolume;
    }

    HowMuchFreeSpace() {
        return this.capacity - this.currentVolume;
    }

    AddToTank(amount) {
        if (amount < 0) {
            return;
        }
        this.currentVolume += amount;
        if (this.currentVolume > this.capacity) {
            this.currentVolume = this.capacity;
        }
    }

    GetFromTank(amount) {
        if (amount < 0) {
            return 0;
        }
        if (amount > this.currentVolume) {
            const koik = this.currentVolume;
            this.currentVolume = 0;
            return koik;
        }
        this.currentVolume -= amount;
        return amount;
    }

    Print() {
        console.log(this.currentVolume + `/` + this.capacity);
    }
}

const tank = new BulkTank();
tank.GetFromTank(100);
tank.AddToTank(25);
tank.GetFromTank(5);
console.log(tank.Print());

const tank2 = new BulkTank(50);
tank2.AddToTank(100);
console.log(tank2.Print());

module.exports = BulkTank;