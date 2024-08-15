let days = +prompt("Введите число что бы узнать сколько дней в месяце") 
  switch (days) {
    case 2:
        console.log("28 дней");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 дней");
        break;

    case 4:
    case 6:
    case 9:
    case 11:
    console.log("30 дней");
    break;

    default:
        console.log("Такой месяц ещё не придумали");
        break;
  }