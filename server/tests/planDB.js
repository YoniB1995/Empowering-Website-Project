const planDB = {
	"getAllPlansHebrew": {
		"success": {
			"res": {
				"statusCode": 200,
				"headers": {
					"content-type": "application/json"
				}
			},
			"body": {
				"status": "success",
				"data": [
					{
						"_id": "6151be2ab50682e8745aa4bc",
						"title": "קורס יזמות עסקית",
						"description": "התוכנית מיועדת לבעלות עסקים ויזמיות בתחומים מגוונים, בעלות פוטנציאל עסקי ואישי.\nהתוכנית תקנה כלים ניהוליים בתהליך המורכב של הפיכת רעיון לעסק מצליח. \nבתוכנית ילמדו הנשים איך לבנות תוכנית עבודה ואיך להגדיר צעדים להקמת עסק.\nהתוכנית היא בשת\"פ עם מעוף.\n",
						"markdown": "#יזמות #עסקים",
						"createdAt": "2021-09-28T21:00:00.000Z",
						"lang": "hebrew",
						"__v": 0
					},
					{
						"_id": "6151bed5b50682e8745aa4c0",
						"title": "השכלה גבוהה",
						"description": "תוכנית ההשכלה גבוהה תיתן הכוונה וייעוץ לנשים אשר מעוניינות ללמוד ולשפר את איכות חייהן וחיי משפחתן, התוכנית תחשוף בפני הנשים את המוסדות הלימוד ותוכניות הקיימות בכל הארץ ואף תסייע במציאת מלגות ונשאף אף למתן מלגות לימודים.",
						"markdown": "#השכלה #לימודים",
						"createdAt": "2021-09-28T21:00:00.000Z",
						"lang": "hebrew",
						"__v": 0
					},
					{
						"_id": "6151befcb50682e8745aa4c4",
						"title": "תוכניות העצמה נשית",
						"description": "הכרת כלים לשיפור היכולות האישיות של נשים בעבודה, בחברה ובמשפחה, וביניהם:\n\tחוק למניעת הטרדה מינית.\n\tחוק עבודת נשים וחוק שווי זכויות האישה.\n\tחוק שיווי זכויות האישה וחוק שיוון זכויות הזדמנויות בעבודה.\n\tאסרטיביות ככלי מרכזי להעצמת נשים.\n\tהפמיניזם ככלי להעצמת נשים.\n",
						"markdown": "#העצמה #שיוויון",
						"createdAt": "2021-04-09T21:00:00.000Z",
						"lang": "hebrew",
						"__v": 0
					}
				]
			}
		},
		"failure": {
			"res": {
				"statusCode": 404,
				"headers": {
					"content-type": "application/json"
				}
			},
			"body": {
				"status": "error",
				"message": "That plan does not exist."
			}
		}
	},
	"getAllPlansEnglish": {
		"success": {
			"res": {
				"statusCode": 200,
				"headers": {
					"content-type": "application/json"
				}
			},
			"body": {
				"status": "success",
				"data": [
					{
						"_id": "6151c1545944e0d47c1237ae",
						"title": "Business Entrepreneurship Course",
						"description": "The program is intended for business owners and entrepreneurs in diverse fields, with business and personal potential.\nThe program will provide management tools in the complex process of turning an idea into a successful business.\nIn the program, the women will learn how to build a work plan and how to set up steps to start a business.\nThe program is in collaboration with Maof.",
						"markdown": "#Entrepreneurship\n#Business",
						"createdAt": "2021-09-28T21:00:00.000Z",
						"lang": "english",
						"__v": 0
					},
					{
						"_id": "6153968ebd18e94c5826a330",
						"title": "Higher education",
						"description": "The higher education program will provide guidance and counseling to women who are interested in studying and improving their quality of life and family life, the program will expose women to the existing institutions and programs throughout the country and even help find scholarships and even strive for scholarships.",
						"markdown": "#Education",
						"createdAt": "2021-09-28T21:00:00.000Z",
						"lang": "english",
						"__v": 0
					},
					{
						"_id": "615396babd18e94c5826a331",
						"title": "Female empowerment programs",
						"description": "Knowledge of tools for improving the personal abilities of women at work, in society and in the family, including:\n Sexual Harassment Prevention Act.\n Women's Labor Law and the Equal Rights of Women Law.\n The Equal Rights of Women Law and the Equal Employment Opportunity Law.\n Assertiveness as a key tool for women empowerment.\n Feminism as a tool for women's empowerment.",
						"markdown": "#empowerment ",
						"createdAt": "2021-09-28T21:00:00.000Z",
						"lang": "english",
						"__v": 0
					}
				]
			}
		},
		"failure": {
			"res": {
				"statusCode": 404,
				"headers": {
					"content-type": "application/json"
				}
			},
			"body": {
				"status": "error",
				"message": "That plan does not exist."
			}
		}
	},
	"getOnePlan": {
		"success": {
			"res": {
				"statusCode": 200,
				"headers": {
					"content-type": "application/json"
				}
			},
			"body": {
				"status": "success",
				"data": [
					{
						"_id": "6151befcb50682e8745aa4c4",
						"title": "תוכניות העצמה נשית",
						"description": "הכרת כלים לשיפור היכולות האישיות של נשים בעבודה, בחברה ובמשפחה, וביניהם:\n\tחוק למניעת הטרדה מינית.\n\tחוק עבודת נשים וחוק שווי זכויות האישה.\n\tחוק שיווי זכויות האישה וחוק שיוון זכויות הזדמנויות בעבודה.\n\tאסרטיביות ככלי מרכזי להעצמת נשים.\n\tהפמיניזם ככלי להעצמת נשים.\n",
						"markdown": "#העצמה #שיוויון",
						"createdAt": "2021-04-09T21:00:00.000Z",
						"lang": "hebrew",
						"__v": 0
					}
				]
			}
		},
		"failure": {
			"res": {
				"statusCode": 404,
				"headers": {
					"content-type": "application/json"
				}
			},
			"body": {
				"status": "error",
				"message": "That plan does not exist."
			}
		}
	},
	"createPlan": {
		"success": {
			"res": {
				"statusCode": 201,
				"headers": {
					"content-type": "application/json"
				}
			},
			"body": {
				"status": "success",
				"data": [
					{
						"_id": "6151bed5b50682e8745aa4c0",
						"title": "השכלה גבוהה",
						"description": "תוכנית ההשכלה גבוהה תיתן הכוונה וייעוץ לנשים אשר מעוניינות ללמוד ולשפר את איכות חייהן וחיי משפחתן, התוכנית תחשוף בפני הנשים את המוסדות הלימוד ותוכניות הקיימות בכל הארץ ואף תסייע במציאת מלגות ונשאף אף למתן מלגות לימודים.",
						"markdown": "#השכלה #לימודים",
						"createdAt": "2021-09-28T21:00:00.000Z",
						"lang": "hebrew",
						"__v": 0
					},
					{
						"_id": "6151befcb50682e8745aa4c4",
						"title": "תוכניות העצמה נשית",
						"description": "הכרת כלים לשיפור היכולות האישיות של נשים בעבודה, בחברה ובמשפחה, וביניהם:\n\tחוק למניעת הטרדה מינית.\n\tחוק עבודת נשים וחוק שווי זכויות האישה.\n\tחוק שיווי זכויות האישה וחוק שיוון זכויות הזדמנויות בעבודה.\n\tאסרטיביות ככלי מרכזי להעצמת נשים.\n\tהפמיניזם ככלי להעצמת נשים.\n",
						"markdown": "#העצמה #שיוויון",
						"createdAt": "2021-04-09T21:00:00.000Z",
						"lang": "hebrew",
						"__v": 0
					}
				]
			}
		},
		"failure": {
			"res": {
				"statusCode": 400,
				"headers": {
					"content-type": "application/json"
				}
			},
			"body": {
				"status": "error",
				"message": "Something went wrong."
			}
		}
	},
	"updatePlanDetails": {
		"success": {
			"res": {
				"statusCode": 201,
				"headers": {
					"content-type": "application/json"
				}
			},
			"body": {
				"status": "success",
				"message": "Plan details has changed!",
				"data": [
					{
						"_id": "6151bed5b50682e8745aa4c0",
						"title": "השכלה גבוהה",
						"description": "תוכנית ההשכלה גבוהה תיתן הכוונה וייעוץ לנשים אשר מעוניינות ללמוד ולשפר את איכות חייהן וחיי משפחתן, התוכנית תחשוף בפני הנשים את המוסדות הלימוד ותוכניות הקיימות בכל הארץ ואף תסייע במציאת מלגות ונשאף אף למתן מלגות לימודים.",
						"markdown": "#השכלה #לימודים",
						"createdAt": "2021-09-28T21:00:00.000Z",
						"lang": "hebrew",
						"__v": 0
					}
				]
			}
		},
		"failure": {
			"res": {
				"statusCode": 404,
				"headers": {
					"content-type": "application/json"
				}
			},
			"body": {
				"status": "error",
				"message": "Plan details does not exist."
			}
		}
	}
}
module.exports = planDB;
