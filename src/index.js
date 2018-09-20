// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var countH=0, countQ=0, countD=0, countN=0, countP=0;
    var Exchange = {};
    var rest =  currency;
    if (rest>10000)
    {
        Exchange.error = "You are rich, my friend! We don't have so much coins for exchange";
        rest = 0;
    }
    if (rest>=50)
    {
      Exchange.H = Math.floor(rest/50);
      rest = rest - Exchange.H * 50;
    }
    if (rest>=25)
    {
      Exchange.Q = Math.floor(rest/25);
      rest = rest - Exchange.Q * 25;
    }
    if (rest>=10)
    {
      Exchange.D = Math.floor(rest/10);
      rest = rest - Exchange.D * 10;
    } 
    if (rest>=5)
    {   
        Exchange.N = Math.floor(rest/5);
        rest = rest - Exchange.N * 5;
    } 
    if (rest>0)
    {   
        Exchange.P = rest;
    }
    return Exchange;
}
