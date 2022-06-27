import defineHealthGrade from "../index.js";

test("checkHealthGrade", () => {
    const testUser = {
        name: "Маг",
        health: 90,
    };

    const result = defineHealthGrade(testUser);
    expect(result).toBe("healthy");
});
