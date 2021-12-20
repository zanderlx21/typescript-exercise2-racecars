interface ShippingContainer {
    destination: string;
    cargoWeight?: number;
    getGrossWeight:() => number;  //getter
}

export default ShippingContainer;