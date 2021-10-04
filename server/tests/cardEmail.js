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
  },
  "sendCard": {
    "success": {
      "res": {
        "statusCode": 200,
        "headers": {
          "content-type": "application/json"
        }
      },
      "body": {
        "status": "success",
          "card": {
              "fullName": "ron moyal",
              "email":"ron@gmail.com",
          }
      }
    },
  
  },
  
};

  


module.exports = cardEmail;
