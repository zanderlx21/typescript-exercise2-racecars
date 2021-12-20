import LightContainer from "../src/lightContainer"

describe("Light Container", () => {
    test("destination is set from constructor", () => {
        let newDestination: LightContainer = new LightContainer("Las Vegas", 0);
        expect(newDestination.destination).toBe("Las Vegas")
    })
    test("cargoWeight is set from constructor", () => {
        let newCargoWeight: LightContainer = new LightContainer("Las Vegas", 20);
        expect(newCargoWeight.cargoWeight).toBe(20)
    })
    test("destination is set from constructor", () => {
        let newCargoWeight: LightContainer = new LightContainer("Las Vegas", 50);
        expect(newCargoWeight.getGrossWeight()).toBe(50)
    })
    test("destination is set from constructor", () => {
        let newCargoWeight: LightContainer = new LightContainer("Las Vegas", 1000);
        expect(newCargoWeight.getGrossWeight()).toBe(1000)
    })
})
