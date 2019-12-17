
$('#register').click(()=>{
    $('#content').html(`
        <fieldset>
            <legend>Student's Information</legend>
            <div>  
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value="" aria-describedby="name-format" required>
                <span id="name-format" class="help">Format: Firstname Lastname</span>
            </div>
            <div>
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" value="" min="16" max="35">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="" required>
            </div>
            <div>
                <label for="city">City:</label>
                <input type="text" id="city" name="city" value="">
            </div>
            <div>
                <label for="locate">Location:</label>
                <input type="text" id="locate" name="locate" value="">
            </div>
            <div>
                <label for="country">Country:</label>
                <input type="text" id="country" name="country" value="">
            </div>
                <label for="phone">Phone <abbr title="Number">No</abbr>:</label>
                <input type="number" id="phone" name="phone" value="" minlength="7">
            </div>
            <div>
                <label for="class">Class Level:</label>
                <input type="number" id="class" name="class" value="" required min="1" max="4">
            </div>
            <div class="submit">
                <input type="submit" value="Submit" class="submit">
        </fieldset>
    `)
})
$('#login').click(()=>{
    $('#content').html(`
        <fieldset>
            <legend>Login</legend>
            <div>  
                <label for="username">UserName:</label>
                <input type="text" id="username" name="username" value="" aria-describedby="name-format" required>
                <span id="name-format" class="help">Format: Firstname Lastname</span>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password" value="" required aria-describedby="password-format">
                <span id=""password-format" class="help">Format: Firstname_Lastname_Age</span>
                </div>
            <div class="submit">
                <input type="submit" value="Submit" class="submit">
        </fieldset>
    `)
})   
