'use strict';

const ads = document.querySelector('.ads');

const itemFour = document.querySelector('.item_four');
const itemThree = document.querySelector('.item_three');

const propsList = document.querySelectorAll('.props__list');
const itemTitle = document.querySelectorAll('.item__title');

const propsItemTwo = document.querySelector('.item_two .props__item_four');
const propsItemFour = document.querySelectorAll('.props__item_four');

const propsItemFive = document.querySelector('.item_three .props__list');
const propsItemThree = document.querySelector('.item_five .props__list');
const propsItemSix = document.querySelectorAll('.item_six .props__item_two');

const tempElement = document.createElement('div');

propsList[2].after(propsItemSix[1]);
propsList[2].after(propsItemSix[0]);


propsList[5].before(itemTitle[1]);
propsList[4].before(itemTitle[4]);
propsList[2].before(itemTitle[3]);

propsItemFive.replaceWith(tempElement);
propsItemThree.replaceWith(propsItemFive);
tempElement.replaceWith(propsItemThree);

itemTitle[2].innerHTML = 'This и прототипы объектов';

propsItemFour[2].after(propsItemTwo);
itemThree.after(itemFour);
ads.remove();
