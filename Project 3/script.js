      // Process the data for funnel chart
      const funnelY1 = Data.map(entry => entry.Country);
      const funnelY2 = Data.map(entry => entry.smoking_male);
      const funnelX = Data.map(entry => entry.smoking_female);



      var violinY1 = Data.map(entry => entry.Country);
        var violinY2 = Data.map(entry => entry.HIV_male);
        var violinX = Data.map(entry => entry.HIV_female);
