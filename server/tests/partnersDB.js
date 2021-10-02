 const partnersDB = {
    "getAllPartners": {
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
            "_id": "61571881ee939ad2a8ffdb6c",
            "name": "Tech Career",
            "image": "https://scontent.fhfa4-1.fna.fbcdn.net/v/t1.6435-9/191941196_4334581536592449_2743491424240249093_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DufaeePMDuoAX-i6x8b&_nc_ht=scontent.fhfa4-1.fna&oh=d7e85702ed37e48297102177a8d8dcf1&oe=617D00FB"
        },
        {
            "_id": "6157189eee939ad2a8ffdb6e",
            "name": "Ashkelon Youth Center",
            "image": "https://scontent.fhfa4-1.fna.fbcdn.net/v/t1.6435-9/66366452_388666031754061_7042020200903868416_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7zgVTn_6fOkAX_nl_vl&_nc_ht=scontent.fhfa4-1.fna&oh=2d3d7eb0429c442c970a75687e399dbf&oe=617B4AAD"
        },
        {
            "_id": "6157196eee939ad2a8ffdb70",
            "name": "Maof",
            "image": "https://eilat.city/images/3268-%D7%9E%D7%A2%D7%95%D7%A3-%D7%90%D7%99%D7%9C%D7%AA-12.jpg"
        },
        {
            "_id": "61571a40ee939ad2a8ffdb73",
            "name": "Tauber Family Foundation",
            "image": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ldlxcoq2gyt9uoskqcna"
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
      "message": "The partners details does not exist."
    }
  }
},
 "getOnePartner": {
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
            "_id": "61571a40ee939ad2a8ffdb73",
            "name": "Tauber Family Foundation",
            "image": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ldlxcoq2gyt9uoskqcna"
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
      "message": "The partner details does not exist.."
    }
  }
},
"addNewPartner": {
  "success": {
    "res": {
      "statusCode": 201,
      "headers": {
        "content-type": "application/json"
      }
    },
    "body": {
      "status": "success",
      "message":"New Partner Added!",
      "data": [ ]
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
"updatePartnerDetails": {
  "success": {
    "res": {
      "statusCode": 201,
      "headers": {
        "content-type": "application/json"
      }
    },
    "body": {
      "status": "success",
      "message":"partner details has changed!",
      "data": [
        {
          "_id": "61571a40ee939ad2a8ffdb73",
            "name": "Tauber Family Foundation",
            "image": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ldlxcoq2gyt9uoskqcna"
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
    "message": "Partner details not exist."
  }
}
}
}

module.exports = partnersDB;