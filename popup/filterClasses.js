// ########
// # keys #
// ########

//included ratings          include_work_search[rating_ids][]
//included warnings         include_work_search[archive_warning_ids][]
//included categories       include_work_search[category_ids][]

//excluded ratings          exclude_work_search[rating_ids][]
//excluded warnings         exclude_work_search[archive_warning_ids][]
//excluded categories       exclude_work_search[category_ids][]

//included tags             work_search[other_tag_names]
//excluded tags             work_search[excluded_tag_names]

//crossover                 work_search[crossover]
//completionStatus          work_search[complete]
//language                  work_search[language_id]
//words from                work_search[words_from]
//words to                  work_search[words_to]
//date from                 work_search[date_from]
//date to                   work_search[date_to]
//search within results     work_search[query]



var filterSortType =  [ 
    {"key":"authors_to_sort_on", "value":"Author"},
    {"key":"title_to_sort_on", "value":"Title"},
    {"key":"created_at", "value":"Date Posted"},
    {"key":"revised_at", "value":"Date Updated"},
    {"key":"word_count", "value":"Word Count"},
    {"key":"hits", "value":"Hits"},
    {"key":"kudos_count", "value":"Kudos"},
    {"key":"comments_count", "value":"Comments"},
    {"key":"bookmarks_count", "value":"Bookmarks"},
];
var ratings = [ //has to be a select, not a checkbox group
    {"key":"9", "value":"Not Rated"},
    {"key":"10", "value":"General Audiences"},
    {"key":"11", "value":"Teen And Up Audiences"},
    {"key":"12", "value":"Mature"},
    {"key":"13", "value":"Explicit"},
]
var crossoverType = [
    {"key":"", "value":"Include crossovers"},
    {"key":"F", "value":"Exclude crossovers"},
    {"key":"T", "value":"Show only crossovers"},
]
var completionStatus = [
    {"key":"", "value":"All works"},
    {"key":"T", "value":"Complete works only"},
    {"key":"F", "value":"Works in progress only"},
]


var languages = [

];
/*

	InExclude include;
	InExclude exclude;
	CrossoverType crossover;
	CompletionStatus completionStatus;
	WordCount wordCount;
	DateUpdated dateUpdated;
}

*/