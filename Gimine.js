class Gimine {
    constructor() {
        this.list = [];
    }

    gime(item) {
        item.married = false;
        this.list.push(item);
    }

    giminesMedis() {
        for (let i = 0; i < this.list.length; i++) {
            const zmogus = this.list[i];
            let statusas = '';
            if (zmogus.gender) {
                statusas = (zmogus.married ? '' : 'ne') + 'istekejusi';
            } else {
                statusas = (zmogus.married ? '' : 'ne') + 'vedes';
            }

            console.log(`${i + 1}. ${zmogus.name} gime ${zmogus.year} metais ir yra ${statusas}.`);
        }
    }

    zmogausInformacija(index) {
        console.log(this.list[index]);
    }

    vestuves(index) {
        this.list[index].married = true;
    }

    mire(index) {
        const newList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                newList.push(this.list[i]);
            }
        }

        this.list = newList;
    }

    skyrybos(index) {
        this.list[index].married = false;
    }
}

module.exports = Gimine;