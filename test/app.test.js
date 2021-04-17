import { appPublic } from "../src/js/app"
import _ from "lodash";
import { validate } from "webpack";

const ValidData = [
    {
        "name": "Darchelle Wright",
        "address": "8996 Sunny Row",
        "zip": "78015",
        "id": "f3052"
    },
    {
        "name": "Madalyn Childress",
        "address": "2690 Mandarin Route",
        "zip": "95026",
        "id": "15952"
    },
    {
        "name": "Autrey Hinkle",
        "address": "6395 Upper Lane",
        "zip": "00000",
        "id": "65f88"
      },
      {
        "name": "Karline Timmons",
        "address": "7089 Cave Route",
        "zip": null,
        "id": "6e48a"
      },
      {
        "name": "Alethia Newberry",
        "address": "1975 Gravel Row",
        "zip": "32712",
        "id": "19a0a"
      },
]

const inMemoryMockElement = document.createElement("div");

test("duplicate Name", () => {

    const testData = [ ...ValidData ,... [
        
        {
            "name": "name1",
            "address": "8996 Sunny Row",
            "zip": "78015",
            "id": "f3052"
        },
        {
            "name": "",
            "address": "2690 Mandarin Route",
            "zip": "95026",
            "id": "15952"
        }]]

       // to be done

})