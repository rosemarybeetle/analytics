function () {
var baked_ratio=50;
var reliability="Unknown";
var baked_result_default="Insufficient data to assess";
var baked_result=baked_result_default;

var l_last_eaten=document.getElementByName("last_eaten").value;
var l_weekly_eaten=document.getElementByName("weekly_eaten").value;
var l_brioche=document.getElementByName("brioche").value;
var l_pat_vicinity=document.getElementByName("pat_vicinity").value;
var l_gastro_rating=document.getElementByName("gastro_rating").value;

if (l_weekly_eaten=="0"){
baked_result="Terminate assessment - health-freak spoiling it for everyone.";
return baked_result;
} else if (l_weekly_eaten=="1-2") {
reliability="Subject lies about their eating habits.";
baked_result="Subject does scoff baked stuff";
} else if (l_weekly_eaten=="0-11") {
reliability="Subject seems trustworthy.";
baked_result="Average baked-goods eater. A bit non-committed to the cause, though perhaps.";
}else if (l_weekly_eaten=="12+") {
reliability="Subject seems trustworthy";
baked_result="Solid hearty Eater. Appreciates the baked-goods lifestyle.";
} else if (l_weekly_eaten=="12+s") {
reliability="Self-deluded";
baked_result="Commendable - subject likes baked-goods sufficiently to over-eat, but potentially too reckless to leave alone with quality goods.";
}

if ( l_brioche=="yes" ) {
baked_result+="Sweet toothed tendency.";
} else if ( l_brioche=="no" ){
baked_result+="Savoury bent.";
} else if ( l_brioche=="Not sure" ){
baked_result="Reject subject. Lack of committment";
return baked_result;
}

if (l_pat_vicinity=="yes")
{
reliability+="At least their know where to truffle for goodies";
baked_result+="Experienced baked goods eater";
} else if (l_pat_vicinity=="no") {
reliability+="Some empathy for bakery-stomach syndrome shown.";
baked_result+="Have made some effort to root out goodies";
return baked_result;

} else if (l_pat_vicinity=="Don't know") {
reliability+="Insufficient committment shown.";
baked_result+="Reject subject as lack-lustre.";
return baked_result;
}

if (gastro_rating==0){
reliability+="Unconvincing fashion victim.";
baked_result+="Reject subject - trendiness shown over bake-worthiness.";
return baked_result;
} else if ((gastro_rating>0) AND (gastro_rating<7)) {
reliability+="Commended - subject considers bake-worthiness.";
baked_result+="Yes, very good - evidence of breadth of scoffs shown.";
return baked_result;
} else if (gastro_rating>6) {
reliability+="Early promise undermined - subject distracted by non-bakery temptations.";
baked_result+="Could have been great. Let themselves down and let baking down, with disappointing attitude.";
return baked_result;
}

}