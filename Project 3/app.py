from flask import Flask,send_file
import pandas as pd
import matplotlib.pyplot as plt
import io
import numpy as np

 
#@app.route('/api/data')
#def get_data():

#app = Flask(__name__)

# ...

# Function that needs to access Flask-specific functionality
def my_function():
    
    
    df = pd.read_csv('df1.csv')
    country = df['Country']
    sm= df['smoking_male']
    sf = df['smoking_female']
    hm= df['HIV_male']
    hf= df['HIV_female']


    #fig, ((ax1,ax2, ax3,ax4)) = plt.subplots(4, figsize=(12, 6))
    fig, ((ax3, ax4, ax5), (ax6, ax7, ax8)) = plt.subplots(2, 3, figsize=(12, 8))

    

#    ax1.hist(sm, bins=20, alpha=0.5, color='green')
#    ax1.set_xlabel('Value')
#    ax1.set_ylabel('Frequency')
#    ax1.set_title('Smoking Male Column')
    #ax1.plot(sm)
    
    
    

   # Plot histogram for 'sf'
#    ax2.hist(sf, bins=20, alpha=0.5, color='blue')
#    ax2.set_xlabel('Value')
#    ax2.set_ylabel('Frequency')
#    ax2.set_title('Smoking Female Column')
    #ax2.plot(sf)
    

    ax3.hist(hm, bins=20, alpha=0.5, color='yellow')
    ax3.set_xlabel('Value')
    ax3.set_ylabel('Frequency')
    ax3.set_title('HIV Male Column')
    

    ax4.hist(hf, bins=20, alpha=0.5, color='orange')
    ax4.set_xlabel('Value')
    ax4.set_ylabel('Frequency')
    ax4.set_title(' HIV Female Column')
    
    
    
  
    
    
    top_countries_sm = df.sort_values(by='smoking_male', ascending=False).head(10)
    countries_sm = top_countries_sm['Country']
    sm_cases = top_countries_sm['smoking_male']
    
    ax5.bar(countries_sm, sm_cases, color='green')
    ax5.set_xlabel('Country')
    ax5.set_ylabel('Smoking Male')
    ax5.set_title('Top Ten Countries by Smoking Male Cases')
    ax5.tick_params(axis='x', rotation=90)

    top_countries_sf = df.sort_values(by='smoking_female', ascending=False).head(10)
    countries_sf = top_countries_sf['Country']
    sf_cases = top_countries_sf['smoking_female']
    
    ax6.bar(countries_sf, sf_cases, color='blue')
    ax6.set_xlabel('Country')
    ax6.set_ylabel('Smoking female')
    ax6.set_title('Top Ten Countries by Smoking Male Cases')
    ax6.tick_params(axis='x', rotation=90)


    top_countries_hm = df.sort_values(by='HIV_male', ascending=False).head(10)
    countries_hm= top_countries_hm['Country']
    hm_cases = top_countries_hm['HIV_male']
    
    ax7.bar(countries_hm, hm_cases, color='orange')
    ax7.set_xlabel('Country')
    ax7.set_ylabel('HIV Male')
    ax7.set_title('Top Ten Countries by HIV Male Cases')
    ax7.tick_params(axis='x', rotation=90) 
    
    top_countries_hf = df.sort_values(by='HIV_female', ascending=False).head(10)
    countries_hf= top_countries_hf['Country']
    hf_cases = top_countries_hf['HIV_male']
    
    ax8.bar(countries_hf, hf_cases, color='yellow')
    ax8.set_xlabel('Country')
    ax8.set_ylabel('HIV_female')
    ax8.set_title('Top Ten Countries by HIV Female Cases')
    ax8.tick_params(axis='x', rotation=90) 
    # return jsonify(df.to_dict(orient='records'))

    plt.tight_layout()
    plt.subplots_adjust(hspace=0.5)  
    plt.savefig('image.png', format='png')

#    plt.savefig('image.png', format='png')

    # Save the visualization to a file-like object
    #image_stream = io.BytesIO()
    #plt.savefig('ax1.png', format='png')
    #image_stream.seek(0)

    #return send_file(image_stream, mimetype='image/png')

                                                        


# if __name__ == '__main__':
#     app.run()

my_function()
