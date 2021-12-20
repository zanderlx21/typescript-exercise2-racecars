import ShippingContainer from './shipppingContainer'

export class LightContainer implements ShippingContainer {
    destination: string;
    cargoWeight: number = 0;
    constructor(destination: string, cargoWeight: number) {
        this.destination = destination;
        this.cargoWeight = cargoWeight;
    }
getGrossWeight(): number {
    return this.cargoWeight;
};

}

export default LightContainer;