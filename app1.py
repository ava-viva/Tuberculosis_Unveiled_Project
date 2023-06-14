from flask import Flask, send_file
import matplotlib.pyplot as plt
import io
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    # Read data from CSV file
    file_path = '/Users/ranamousavi/Desktop/Project 3/data.csv'
    data = pd.read_csv(file_path)
    country = data['Country']
    tb = data['tuberculosis']
    db = data['diabetes']
    hiv = data['HIV_total']
    
    # Create subplots for each column
    fig, ((ax1, ax2, ax3), (ax4, ax5, ax6)) = plt.subplots(2, 3, figsize=(12, 8))
    
    # Plot histogram for 'tb'
    ax1.hist(tb, bins=20, alpha=0.5, color='blue')
    ax1.set_xlabel('Value')
    ax1.set_ylabel('Frequency')
    ax1.set_title('Distribution of TB Column')
    
    # Plot histogram for 'db'
    ax2.hist(db, bins=20, alpha=0.5, color='green')
    ax2.set_xlabel('Value')
    ax2.set_ylabel('Frequency')
    ax2.set_title('Distribution of DB Column')
    
    # Plot histogram for 'hiv'
    ax3.hist(hiv, bins=20, alpha=0.5, color='orange')
    ax3.set_xlabel('Value')
    ax3.set_ylabel('Frequency')
    ax3.set_title('Distribution of HIV Column')
    
    # Plot bar chart for top ten countries based on 'tb'
    top_countries_tb = data.sort_values(by='tuberculosis', ascending=False).head(10)
    countries_tb = top_countries_tb['Country']
    tb_cases = top_countries_tb['tuberculosis']
    
    ax4.bar(countries_tb, tb_cases, color='blue')
    ax4.set_xlabel('Country')
    ax4.set_ylabel('TB Cases')
    ax4.set_title('Top Ten Countries by TB Cases')
    ax4.tick_params(axis='x', rotation=90)  # Rotate x-axis tick labels vertically
    
    # Plot bar chart for top ten countries based on 'db'
    top_countries_db = data.sort_values(by='diabetes', ascending=False).head(10)
    countries_db = top_countries_db['Country']
    db_cases = top_countries_db['diabetes']
    
    ax5.bar(countries_db, db_cases, color='green')
    ax5.set_xlabel('Country')
    ax5.set_ylabel('DB Cases')
    ax5.set_title('Top Ten Countries by DB Cases')
    ax5.tick_params(axis='x', rotation=90)  # Rotate x-axis tick labels vertically
    
    # Plot bar chart for top ten countries based on 'hiv'
    top_countries_hiv = data.sort_values(by='HIV_total', ascending=False).head(10)
    countries_hiv = top_countries_hiv['Country']
    hiv_cases = top_countries_hiv['HIV_total']
    
    ax6.bar(countries_hiv, hiv_cases, color='orange')
    ax6.set_xlabel('Country')
    ax6.set_ylabel('HIV Cases')
    ax6.set_title('Top Ten Countries by HIV Cases')
    ax6.tick_params(axis='x', rotation=90)  # Rotate x-axis tick labels vertically

    # Adjust spacing between subplots
    plt.tight_layout()
    plt.subplots_adjust(hspace=0.5)  # Increase the vertical spacing between subplots

    # Save the visualization to a file-like object
    image_stream = io.BytesIO()
    plt.savefig(image_stream, format='png')
    image_stream.seek(0)
    
    return send_file(image_stream, mimetype='image/png')

if __name__ == '__main__':
    app.run()
