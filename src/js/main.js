import _ from "lodash";

// const data = require("../model/data_subset.json");
const data = require("../model/data.json");

export const main = (root) => {
  const appendToUI = (text) => {
    const divtoappend = document.createElement("div");
    divtoappend.textContent = text;
    root.append(divtoappend);
  };

  const getDuplicate = (collection) => {
    return _.pickBy(
      collection,
      (val, key) =>
        val.length > 1 && key !== "null" && key !== "undefined" && key !== ""
    );
  };

  const getInnerText = (item) => {
    if (typeof item === "object") {
      let stringval = "";
      _.forEach(_.keys(item), (k) => {
        stringval += ` ,  ${k} - ${item[k]}`;
      });
      return stringval;
    }
    return item;
  };

  const renderList = (Heading, arrayItems) => {
    let lielements;
    const LuNode = document.createElement("lu");
    _.forEach(arrayItems, (i) => {
      const LiNode = document.createElement("li");

      LiNode.textContent = getInnerText(i);

      LuNode.appendChild(LiNode);
    });

    const divtoappend = document.createElement("div");
    const heading = document.createElement("h4");
    heading.textContent = Heading;

    divtoappend.appendChild(heading);
    divtoappend.appendChild(LuNode);

    const brNode = document.createElement("br");
    divtoappend.appendChild(brNode);
    divtoappend.appendChild(brNode);

    root.appendChild(divtoappend);
  };

  const getEmptyCollection = (inputData, field) => {
    const fieldGrpb = _.groupBy(inputData, field);
    return [...fieldGrpb[""], ...fieldGrpb.undefined, ...fieldGrpb.null];
  };

  const getDuplicateIDAndNull = (inputData) => {
    const addressGrpb = _.groupBy(inputData, "address");
    const duplicateAddressGrp = getDuplicate(addressGrpb);
    const duplicateAddress = _.flatten(_.values(duplicateAddressGrp));

    const nameGrpb = _.groupBy(duplicateAddress, "name");
    const duplicateNameGrpb = getDuplicate(nameGrpb);
    const duplicateName = _.flatten(_.values(duplicateNameGrpb));

    const zipGrpb = _.groupBy(duplicateName, "zip");
    const duplicateSipGrpb = getDuplicate(zipGrpb);
    // this collection will have same address , zip and Name
    const duplicateZip = _.flatten(_.values(duplicateSipGrpb));

    const emptyName = getEmptyCollection(inputData, "name");
    const emptyAddress = getEmptyCollection(inputData, "address");
    const emptyZip = getEmptyCollection(inputData, "zip");

    return {
      DuplicateIDs: _.map(duplicateZip, "id"),
      EmptyName: _.map(emptyName, "id"),
      EmptyAddress: _.map(emptyAddress, "id"),
      EmptyZip: _.map(emptyZip, "id"),
    };

    // return {
    //   DuplicateIDs: duplicateZip,
    //   EmptyName: emptyName,
    //   EmptyAddress: emptyAddress,
    //   EmptyZip: emptyZip,
    // };
  };

  const callApp = () => {
    // alert("I am starting");
    const {
      DuplicateIDs,
      EmptyName,
      EmptyAddress,
      EmptyZip,
    } = getDuplicateIDAndNull(data);
    renderList("Duplicate records", DuplicateIDs);
    renderList("Empty Names", EmptyName);
    renderList("Empty Address", EmptyAddress);
    renderList("Empty Zip", EmptyZip);
  };

  callApp();
};
