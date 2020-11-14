describe("FizzBuzz", function() {

    it("should return FizzBuzz if we call fizzBuzz(15)", function() {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });

    it("should return Fizz if we call fizzBuzz(9)", function() {
        expect(fizzBuzz(9)).toBe("Fizz");
    });

    it("should return Buzz if we call fizzBuzz(10)", function() {
        expect(fizzBuzz(10)).toBe("Buzz");
    });

    it("should return 8 if we call fizzBuzz(8)", function() {
        expect(fizzBuzz(8)).toBe(8);
    });

    it("should return an error if we don't supply a numbers", function() {
        spyOn(window, "alert");
        fizzBuzz("Hello");
        expect(window.alert).toHaveBeenCalledWith("Error!");
    });
})