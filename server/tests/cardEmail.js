const cardEmail = {
  "getAllCards": {
    "success": {
      "res": {
        "statusCode": 200,
        "headers": {
          'content-type': 'application/json',
        },
      },
      "body": {
        "status": 'success',
        "data": [
          {
            "fullName": 'asalef alena',
            "email": 'asalef@gmail.com',
          },
          {
            "fullName": 'Yoni Bitew',
            "email": 'yoni@gmail.com',
          },
          {
            "fullName": 'lior salomon',
            "email": 'lior@gmail.com',
          },
        ],
      },
    },
  },
  "getOneCard": {
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
            "fullName": 'asalef alena',
            "email": 'asalef@gmail.com',
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
        "message": "That movie does not exist."
      }
    }
  }
};
//  const cardEmail = {

//     "sendCard": {
//   "success": {
//     "res": {
//       "statusCode": 201,
//       "headers": {
//         "content-type": "application/json"
//       }
//     },
//     "body": {
//       "status": "success",
//         "card": {
//             "_id": "614b9fa0df92314c81d69f06",
//             "fullName": "yoni",
//             "email":"yoni10@gmail.com",
//             "__v": 0,
//         }
//     }
//   },

// },

// }

module.exports = cardEmail;
