from flask import Flask
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("nutrition-app-a791d-firebase-adminsdk-fbsvc-0bdf656448.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://nutrition-app-a791d-default-rtdb.firebaseio.com/'  # Replace with your database URL
})

# Now you can access your Realtime Database
ref = db.reference()  # Get a reference to the root of your database
print(ref)
users = ref.child("users").get()
print(users)  #This will print a dictionary of users.
# for user_id, user_data in users.items():
#    print(f"User ID: {user_id}, Data: {user_data}")
# ... your code to read or write data ...



app = Flask(__name__)

@app.route("/users")
def hello():
    return users

app.run()
