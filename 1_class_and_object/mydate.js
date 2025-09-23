class MyDate {
    #day = 0
    #month = 0
    #year = 0
    #date = 0

    constructor(day, month, year) {
        this.#day = day
        this.#month = month
        this.#year = year
    }

    PrintDay() {
        if (!this.IsInteger() || !this.IsValid()) {
            console.log(`Date is not valid`)
        }
        else {
            console.log(this.#day + `.` + this.#month + `.` + this.#year)
        }
    }

    IsValid() {
        if (this.#day < 1 || this.#day > 31) {
            return false
        }
        if (this.#month < 1 || this.#month > 12) {
            return false
        }
                if (this.#month === 1) {
            if (this.#day > 31) {
                return false
            }
            
                if (this.#month === 2) {
            if (this.#day > 28) {
                return false
                }
            }

                if (this.#month === 3) {
            if (this.#day > 31) {
                return false
                }
            }
                if (this.#month === 4) {
            if (this.#day > 30) {
                return false
                }
            }
                if (this.#month === 5) {
            if (this.#day > 31) {
                return false
                }
            }
                if (this.#month === 6) {
            if (this.#day > 30) {
                return false
                }
            }
                if (this.#month === 7) {
            if (this.#day > 31) {
                return false
                }
            }
                if (this.#month === 8) {
            if (this.#day > 31) {
                return false
                }

                if (this.#month === 9) {
            if (this.#day > 30) {
                return false
                    }
                }
                if (this.#month === 10) {
            if (this.#day > 31) {
                return false
                    }
                }
                if (this.#month === 11) {
            if (this.#day > 30) {
                return false
                    }
                }
                if (this.#month === 12) {
            if (this.#day > 31) {
                return false
                    }
                }
            }
        }
        return true
    }

    IsInteger() {
        if (!Number.isInteger(this.#day) || !Number.isInteger(this.#month) || !Number.isInteger(this.#year)) {
            return false
        }
        return true
    }

    earlier(otherDate) {
        if (this.#year < otherDate.#year) {
            return true
        }
        if (this.#year === otherDate.#year) {
            if (this.#month < otherDate.#month) {
                return true
            }
            if (this.#month === otherDate.#month) {
                return this.#day < otherDate.#day
            }
        }
        return false
    }

}
module.exports = MyDate