import { swordsman, sortObj, sortOrder} from "../index.js";

test("checkSortOrder", () => {

    const result = sortObj(swordsman, sortOrder);
    expect(result).toEqual(
        [
            {key: "name", value: "мечник"}, 
            {key: "level", value: 2}, 
            {key: "attack", value: 80}, 
            {key: "defence", value: 40}, 
            {key: "health", value: 10} 
          ]
    );
});
