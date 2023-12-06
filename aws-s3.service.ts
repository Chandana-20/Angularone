import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { environment } from 'src/environments/environment';

// Accessing environment variables
const accessKeyId = environment.awsAccessKeyId;
const secretAccessKey = environment.awsSecretAccessKey;
const region = environment.awsRegion;


@Injectable({
  providedIn: 'root'
})
export class AwsS3Service {
  private s3: AWS.S3;
  private bucketName = 'angularone'; // Replace with your bucket name

  constructor() { 
    // Initialize S3 instance with credentials and region
    AWS.config.update({
      accessKeyId: 'AKIAQ2MK7AYOGP5AUG7X',
      secretAccessKey: 'H8Tt5qiBjvNSLUrTpxB7TP50hP0WtqVTDamWl8mQ',
      region: environment.awsRegion
    });

    this.s3 = new AWS.S3();
  }
  uploadFileToS3(file: File,keyName: string): Promise<any> {
    const params: AWS.S3.PutObjectRequest = {
      Bucket: this.bucketName,
      Key: keyName,
      Body: file,
      ACL: 'public-read' // Set ACL permissions as needed
    };

    return this.s3.upload(params).promise();
  }

  // Method to get a file from S3 bucket
  getFileFromS3(keyName: string): Promise<any> {
    const params: AWS.S3.GetObjectRequest = {
      Bucket: this.bucketName,
      Key: keyName
    };

    return this.s3.getObject(params).promise();
  }

  
}
