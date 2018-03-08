
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { SecurityContext } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
    selector: 'app-unsecure',
    templateUrl: 'unsecure.component.html',
    styleUrls: ['unsecure.component.scss']
})
export class UnsecureComponent implements OnInit {
    dangerousUrl: string;
    dangerousVideoUrl: string;
    trustedUrl: SafeUrl;
    videoUrl: SafeResourceUrl;
    html: string;
    constructor(private sanitizer: DomSanitizer) {
        // javascript: URLs are dangerous if attacker controlled.
        // Angular sanitizes them in data binding, but you can
        // explicitly tell Angular to trust this value:
        this.dangerousUrl = 'javascript:alert("Hi there")';
        this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    }

    ngOnInit() {
        this.updateVideoUrl();
    }
    updateVideoUrl() {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data so
        // that it's easier to check if the value is safe.
        this.dangerousVideoUrl = 'https://www.youtube.com/embed/k5E2AVpwsko';
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    }

}
