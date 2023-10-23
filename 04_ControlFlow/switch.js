//suppose we need to find month from 12 months so we cannot write if else code again and again so switch case is used at this case

const month = 5


switch (month) {
    case 1:
        console.log('This is January');
        break;              //this break is important in switch case it does not excute next part of code
    case 2:
        console.log('This is February');
        break;
    case 3:
        console.log('This is march');
        break;
    case 4:
        console.log('This is april');
        break;
    case 5:
        console.log('This is may');
        break;
    case 6:
        console.log('This is june');
        break;
    case 7:
        console.log('This is july');
        break;
    case 8:
        console.log('This is august');
        break;
    case 9:
        console.log('This is september');
        break;
    case 10:
        console.log('This is october');
        break;

    default:
        console.log('no months');
        break;
}