package com.diagnoPlant.Controllers;

import java.io.IOException;
import java.text.DecimalFormat;

import org.datavec.image.loader.NativeImageLoader;
import org.deeplearning4j.nn.modelimport.keras.KerasModelImport;
import org.deeplearning4j.nn.modelimport.keras.exceptions.InvalidKerasConfigurationException;
import org.deeplearning4j.nn.modelimport.keras.exceptions.UnsupportedKerasConfigurationException;
import org.deeplearning4j.nn.multilayer.MultiLayerNetwork;
import org.nd4j.linalg.api.ndarray.INDArray;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value = "/api/prediction")
public class PredictionController {
    
    // @PostMapping
    // public ResponseEntity diagnose(@RequestParam("photo")MultipartFile file) throws IOException, InvalidKerasConfigurationException, UnsupportedKerasConfigurationException {
    //     try {
    //         MultiLayerNetwork model = KerasModelImport.importKerasSequentialModelAndWeights("../PFF-Angular.Java-SmartFerming/src/main/resources/static/model4.h5", false);

    //         NativeImageLoader loader = new NativeImageLoader(256, 256, 3);

    //         INDArray image = loader.asMatrix(file.getInputStream());

    //         image.divi(256.0);

    //         DecimalFormat df = new DecimalFormat();
    //         df.setMaximumFractionDigits(6);


            
    //     } catch (Exception e) {
    //         //TODO: handle exception
    //     }
    // }
}
