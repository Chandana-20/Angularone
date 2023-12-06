import { Component } from '@angular/core';
import { AwsS3Service } from 'C:\Users\chand\angularone\src\app\aws-s3.service.ts';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  constructor(private awsS3Service: AwsS3Service) {}
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

}
