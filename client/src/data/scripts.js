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
      type: [
        {
          Cashmere: '50%',
          Wool: '46%',
          Modal: '4%',
        },
      ],
      description:
        'Aenean vel felis eu ipsum pharetra finibus. Proin accumsan eleifend dui, in convallis mauris varius sed. Nam luctus justo ut placerat efficitur. Morbi aliquet, lacus a dictum luctus, neque neque fermentum risus, rhoncus accumsan ex sapien ut nisi. Aenean sit amet mattis turpis. Nullam diam erat, sagittis sed laoreet sed, porta a nulla. Mauris luctus aliquet est, sit amet maximus dolor tincidunt vitae. Vestibulum porttitor maximus arcu, et bibendum urna semper id. Integer id sagittis urna. Curabitur nisl sapien, pharetra placerat quam a, tempus dignissim dui. Nunc fermentum dui nec ex blandit, vitae lacinia ante laoreet.',
    },
  ];
};

FakeDataToRender.prototype.getData = () => {
  return this.storage;
};

const data = new FakeDataToRender();
const fakeData = data.getData();

console.log({ fakeData });
