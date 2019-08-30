'use strict';
/* 
    Need to fsreadJSON data 
    Once data is done, build the html divs with JavaScript 
    Get the server working first, then once this is done, focus 
    on styling and make sure that everything is responsive
    and function correctly. 
  */

const FakeDataToRender = () => {
  this.storage = [
    {
      header: 'Fit Guide',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam. Risus feugiat in ante metus dictum at tempor. Ut lectus arcu bibendum at varius vel pharetra vel. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Sit amet tellus cras adipiscing enim eu turpis egestas. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Vel quam elementum pulvinar etiam non quam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nulla at volutpat diam ut venenatis tellus. Felis eget velit aliquet sagittis id consectetur purus ut. Egestas diam in arcu cursus euismod. Duis at consectetur lorem donec. Malesuada bibendum arcu vitae elementum curabitur vitae. Lectus sit amet est placerat in egestas erat imperdiet.',
    },
    {
      header: 'Care',
      description:
        'Aenean vel felis eu ipsum pharetra finibus. Proin accumsan eleifend dui, in convallis mauris varius sed. Nam luctus justo ut placerat efficitur. Morbi aliquet, lacus a dictum luctus, neque neque fermentum risus, rhoncus accumsan ex sapien ut nisi. Aenean sit amet mattis turpis. Nullam diam erat, sagittis sed laoreet sed, porta a nulla. Mauris luctus aliquet est, sit amet maximus dolor tincidunt vitae. Vestibulum porttitor maximus arcu, et bibendum urna semper id. Integer id sagittis urna. Curabitur nisl sapien, pharetra placerat quam a, tempus dignissim dui. Nunc fermentum dui nec ex blandit, vitae lacinia ante laoreet.',
    },
    {
      header: 'Material',
      type: {
        Cashmere: '50%',
        Wool: '46%',
        Modal: '4%',
      },

      description:
        'Aenean vel felis eu ipsum pharetra finibus. Proin accumsan eleifend dui, in convallis mauris varius sed. Nam luctus justo ut placerat efficitur. Morbi aliquet, lacus a dictum luctus, neque neque fermentum risus, rhoncus accumsan ex sapien ut nisi. Aenean sit amet mattis turpis. Nullam diam erat, sagittis sed laoreet sed, porta a nulla. Mauris luctus aliquet est, sit amet maximus dolor tincidunt vitae. Vestibulum porttitor maximus arcu, et bibendum urna semper id. Integer id sagittis urna. Curabitur nisl sapien, pharetra placerat quam a, tempus dignissim dui. Nunc fermentum dui nec ex blandit, vitae lacinia ante laoreet.',
    },
  ];
};

FakeDataToRender.prototype.storeData = () => {
  const storeData = this.storage;
  let newDataObj = {};

  storeData.forEach((data, i, arr) => {
    const description = data.description;
    const materialType = data.type;
    newDataObj[data.header] = { description, materialType };
  });

  return newDataObj;
};

FakeDataToRender.prototype.renderData = object => {
  const fit = document.getElementById('fit');
  const care = document.getElementById('care');
  const materials = document.getElementById('materials');
  const materialStats = document.getElementById('material-stats');

  for (let keys in object) {
    const label = document.createElement('LABEL');
    const paragraph = document.createElement('P');
    const description = object[keys].description;
    const materialObj = object[keys].materialType;

    switch (keys) {
      case 'Fit Guide':
        label.innerHTML = keys;
        paragraph.innerHTML = description;
        fit.appendChild(label);
        fit.appendChild(paragraph);
        break;

      case 'Care':
        label.innerHTML = keys;
        paragraph.innerHTML = description;
        care.appendChild(label);
        care.appendChild(paragraph);
        break;

      case 'Material':
        label.innerHTML = keys;
        paragraph.innerHTML = description;
        materials.appendChild(label);

        for (let keys in materialObj) {
          const singleMaterialDiv = document.createElement('DIV');
          singleMaterialDiv.classList.add('material');
          let materialP = document.createElement('P');
          let span = document.createElement('SPAN');
          materialP.innerHTML = materialObj[keys];
          span.innerHTML = keys;

          singleMaterialDiv.appendChild(span);
          singleMaterialDiv.appendChild(materialP);
          materialStats.appendChild(singleMaterialDiv);
        }
        materials.appendChild(paragraph);
        break;

      default:
    }
  }
};

const AnimationAndEventTriggers = () => {
  this.storage = [];
};

AnimationAndEventTriggers.prototype.renderTabs = () => {};

const newData = new FakeDataToRender();
const newDataObj = newData.storeData();
const createDivs = newData.renderData(newDataObj);
console.log({ newDataObj });
